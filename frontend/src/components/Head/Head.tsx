interface HeadProps{
    title:string;
    description?:string;
}

export const Head = ({title, description = ''}:HeadProps)=>{
    document.title = `Transactions | ${title}`;
    document.querySelector('[name=description]')?.setAttribute('content', description)
    return(
        null
    )
}