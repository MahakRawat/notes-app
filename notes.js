const fs=require('fs')
const chalk=require('chalk')
const addnote= function(title,body)
{
    const notes=loadnotes()
    const duplicate=notes.filter(function(note)
    {
        return note.title===title
    })
    if(duplicate.length===0)
    {
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log('note is added') 
         
    }
    else
    {
        console.log('oops! note title has already been taken!!')
    }
}
const savenotes=function(notes)
{
    const text=JSON.stringify(notes)
    fs.writeFileSync('notes.json',text)
}
const loadnotes=function()
{
   try
   {
      const text =fs.readFileSync('notes.json')
         const bufferdata=text.toString()
        const sometext=JSON.parse(bufferdata)
        return sometext
   } 
   catch(e)
   {
       return []
   }
}
const removenote=function(title)
{
    const notes=loadnotes()
    const count=notes.length
  const to_keep= notes.filter(function(note){
      return note.title!==title
  })
  savenotes(to_keep)
  if(to_keep.length===count)
  {
      console.log(chalk.bgRed('note not found'))
  }
  else
  {console.log(chalk.bgGreen('note is deleted'))} 
}
const showlist= ()=>{
    const notes=loadnotes()
    console.log(chalk.bgBlue('Your List :'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}
const readnote =(title)=>{
    const notes=loadnotes()
    const note =notes.find((note)=>note.title===title)
    if(!note)
    {
        console.log(chalk.bgRed('Note not found!'))
    }
    else
    {
        console.log(chalk.bgCyan(note.title))
        console.log(note.body)
    }
}
module.exports= {
    addnote:addnote,
    removenote: removenote,
    showlist: showlist,
    readnote: readnote
}