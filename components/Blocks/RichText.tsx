import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FiLink2 } from "react-icons/fi";
import { styles } from "@lib/prism";
import slugify from "slugify";

export default function RichText({ content }: any) {
	return (
		<>
			<ReactMarkdown
				className="content"
				components={{
					p: (props) => {
						const { children } = props;

						const code = children.join("").slice(0, 2);

						const getClassName = (code: string) => {
							switch (code) {
								case "!>":
									return "info";
								case "?>":
									return "caution";
								case "x>":
									return "danger";
								default:
									return;
							}
						};
						if (code === "!>" || code === "?>" || code === "x>") {
							return (
								<p
									{...props}
									className={`callout ${getClassName(code)}`}
								>
									{children.map((item) => {
										if (typeof item === "string") {
											return item.replace("!>", "");
										}

										return item;
									})}
								</p>
							);
						}

						return <p>{children}</p>;
					},
					h2: ({ children, ...props }) => {
						const heading: any = children[0] || "";
						const slug = slugify(heading, { lower: true });
						return (
							<h2
								id={slug}
								className="flex items-center justify-between cursor-pointer group"
								onClick={() => {
									navigator.clipboard.writeText(
										`${window.location.href}#${slug}`
									);
								}}
							>
								{children[0]}
								<div>
									<FiLink2 className="text-xl text-gray-400 opacity-0 group-hover:opacity-100" />
								</div>
							</h2>
						);
					},
					code({ node, inline, className, children, ...props }: any) {
						const meta = node?.data?.meta;

						let title;
						let isTerminal = false;

						if (meta) {
							const titleMatches = meta.match(/title="(.*?)"/);

							if (titleMatches) title = titleMatches[1];
						}

						const language =
							/language-(\w+)/.exec(className || "") || [];

						if (language[0] === "language-bash") {
							isTerminal = true;

							if (title === "Output") {
								props["data-teminal-type"] = "output";
							}
						}

						return !inline ? (
							<>
								{title && (
									<div className="flex justify-between code-label">
										<span>{title}</span>
										{title !== "Output" && (
											<span
												className="cursor-pointer"
												onClick={() => {
													navigator.clipboard.writeText(
														String(
															children
														).replace(/\n$/, "")
													);
												}}
											>
												Copy
											</span>
										)}
									</div>
								)}
								<SyntaxHighlighter
									style={styles}
									language={language[1]}
									wrapLines
									PreTag={"div"}
									{...props}
								>
									{String(children).replace(/\n$/, "")}
								</SyntaxHighlighter>
							</>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				}}
			>
				{content}
			</ReactMarkdown>
			<style
				dangerouslySetInnerHTML={{
					__html: `
                    .callout{
                        background-color: #c8dfff;
                        border-radius: 3px;
                        color: #002c9b;
                        display: block;
                        font-size: 15px;
                        line-height: 1.5em;
                        margin: 0 0 1.5em;
                        padding: 1em 1.25em;
                        position: relative;
                        z-index: 0;
                    }
                    .info{
                        background-color: #d4efee;
                        color: #005955;
                    }

					.language-bash::before{
						content: "$";
						display: inline-block;
						margin-right: 10px;
						color: #b7b7b7;
					}

					[data-teminal-type='output'] .language-bash::before {
						display: none;
					  }

                    .code-label{
                        background-color: #e5e5e5;
                        border-radius: 3px 3px 0 0;
                        color: #292929;
                        font-size: 14px;
                        padding: 8px 15px;
                        margin-bottom:-1rem;
                    }
                    .content p {
                        margin-bottom: 22px;
                        line-height: 1.7;
                    }
                    .content p code {
                        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
                        border-radius: 3px;
                        line-height: 22px;
                        font-size: .9375em;
                        padding: 3px 6px;
                        background: #f2f2f2;
                        color: #333;
                    }
                    .content ul {
                        list-style: disc;
                        padding-left: 2.5rem;
                        margin-bottom: 1.7rem;
						overflow-wrap: break-word;
                    }
                    .content ul li {
                        margin-bottom: 0.8rem;
                    }
                    .content h2 {
                        margin-top: 30px;
                        margin-bottom: 10px;
                        color: #292929;
                        font-size: 26px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                    }
                    .content h3 {
                        margin-top: 16px;
                        color: #292929;
                        font-size: 20px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                    }
                    .content img {
                        border-radius: 0.25rem;
                    }
                    .content a {
                        color: #60a5fa;
                    }
                    pre div::-webkit-scrollbar { 
                        display: none;  /* Safari and Chrome */
                    }
                `,
				}}
			/>
		</>
	);
}
