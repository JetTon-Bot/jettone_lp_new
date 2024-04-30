 /* eslint-disable */
import md from '../../public/terms.md'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

const Agreement = () => {
    return (
        <div className="markdown-container">
            <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => <h1 className="markdown-h1" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="markdown-h2" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="markdown-h3" {...props} />,
                    h4: ({ node, ...props }) => <h4 className="markdown-h4" {...props} />,
                    h5: ({ node, ...props }) => <h5 className="markdown-h5" {...props} />,
                    h6: ({ node, ...props }) => <h6 className="markdown-h6" {...props} />,
                    p: ({ node, ...props }) => <p className="markdown-p" {...props} />,
                    a: ({ node, ...props }) => <a className="markdown-a" {...props} />,
                    ul: ({ node, ...props }) => <ul className="markdown-ul" {...props} />,
                    ol: ({ node, ...props }) => <ol className="markdown-ol" {...props} />,
                    li: ({ node, ...props }) => <li className="markdown-li" {...props} />,
                    table: ({ node, ...props }) => <table className="markdown-table" {...props} />,
                    thead: ({ node, ...props }) => <thead className="markdown-thead" {...props} />,
                    tbody: ({ node, ...props }) => <tbody className="markdown-tbody" {...props} />,
                    tr: ({ node, ...props }) => <tr className="markdown-tr" {...props} />,
                    th: ({ node, ...props }) => <th className="markdown-th" {...props} />,
                    td: ({ node, ...props }) => <td className="markdown-td" {...props} />,
                    blockquote: ({ node, ...props }) => <blockquote className="markdown-blockquote" {...props} />,
                    code: ({ node, ...props }) => <code className="markdown-code" {...props} />,
                    em: ({ node, ...props }) => <em className="markdown-em" {...props} />,
                    strong: ({ node, ...props }) => <strong className="markdown-strong" {...props} />,
                    del: ({ node, ...props }) => <del className="markdown-del" {...props} />,
                    hr: ({ node, ...props }) => <hr className  ="markdown-hr" {...props} />,
                }}
                remarkPlugins={[remarkGfm]}
                children={md} />

            <style  jsx>{`
              .markdown-container {
                padding: 1rem;
                max-width: 800px;
                margin: 0 auto;
              }

              .markdown-h1 {
                font-size: 2rem;
              }

              .markdown-h2 {
                font-size: 1.5rem;
              }

              .markdown-h3 {
                font-size: 1.25rem;
              }

              .markdown-h4 {
                font-size: 1rem;
              }

              .markdown-h5 {
                font-size: 0.875rem;
              }

              .markdown-h6 {
                font-size: 0.75rem;
              }

              .markdown-p {
                font-size: 1rem;
              }

              .markdown-a {
                color: blue;
              }

              .markdown-ul {
                list-style-type: disc;
              }

              .markdown-ol {
                list-style-type: decimal;
              }

              .markdown-li {
                font-size: 1rem;
              }

              .markdown-table {
                border-collapse: collapse;
                width: 100%;
              }

              .markdown-th {
                border: 1px solid #4E567D;
                padding: 0.5rem;
                text-align: start;

              }

              .markdown-td {
                border: 1px solid #4E567D;
                padding: 0.5rem;
                text-align: start !important;
                vertical-align: top; 

              }

              .markdown-blockquote {
                border-left: 5px solid black;
                padding-left: 1rem;
              }
            `}</style>

        </div>
    )
}

export default Agreement;
