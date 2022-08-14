import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "../lib/prism/styles";

export default function Markdown({ content }: any) {
	return (
		<>
			<ReactMarkdown
				className="content"
				components={{
					code({ node, inline, className, children, ...props }: any) {
						const match = /language-(\w+)/.exec(className || "");
						const codeHeader = className && className.includes(":");

						return !inline && match ? (
							<>
								{codeHeader && (
									<div className="code-label">
										{className.split(":")[1]}
									</div>
								)}
								<SyntaxHighlighter
									style={styles}
									language={match[1]}
									wrapLines
									PreTag="div"
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
            .code-label{
                background-color: #e5e5e5;
                border-radius: 3px 3px 0 0;
                color: #323232;
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
            }
            .content ul li {
                margin-bottom: 0.8rem;
            }
            .content h2 {
                margin-top: 30px;
                margin-bottom: 10px;
                color: #323232;
                font-size: 26px;
                font-weight: 500;
                letter-spacing: -0.5px;
            }
            .content img {
                border-radius: 0.25rem;
            }
            .content a {
                color: #60a5fa;
            }
        `,
				}}
			/>
		</>
	);
}
