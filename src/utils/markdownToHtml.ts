import Showdown from "showdown"
export const markdownToHtml = async (markdownUrl: string) => {
    const response = await fetch(markdownUrl,{
        
    })
    const markdown = await response.text()
    const converter = new Showdown.Converter()
    console.log(response);
    console.log(markdown);
    const html = converter.makeHtml(markdown);
    return html
}