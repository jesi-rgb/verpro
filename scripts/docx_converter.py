from docx import Document
import re


def convert_docx_to_html(docx_path):
    # Load the document
    doc = Document(docx_path)

    html_content = []

    # Process each paragraph
    for paragraph in doc.paragraphs:
        if not paragraph.text.strip():
            continue

        html_paragraph = ""
        for run in paragraph.runs:
            text = run.text

            # Check if the run is italic
            if run.italic:
                text = f"<i>{text}</i>"

            html_paragraph += text

        if html_paragraph:
            html_content.append(f"<p>{html_paragraph}</p>")

    # Join all paragraphs with newlines
    return "\n".join(html_content)


# Example usage
def main():
    docx_path = input("Enter the path to your DOCX file: ")
    html_output = convert_docx_to_html(docx_path)

    # Save to HTML file
    output_path = docx_path.rsplit(".", 1)[0] + ".html"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html_output)

    print(f"Conversion completed! HTML file saved as: {output_path}")


if __name__ == "__main__":
    main()
