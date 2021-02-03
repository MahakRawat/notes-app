const yargs=require('yargs')
const notes=require('./notes.js')
const pt= yargs.argv
//creating add command
yargs.command({
command:'add',
description:'This will add a note to your system!',
builder:
{
  title:
  {
       description:'This will give title to you note',
       demandOption:true,
       type:'string'
  }, 
  body:
  {
       description:'This is the body of your note',
       demandOption: true,
       type:'string'
  }
},
handler: function(argv)
{
    
   notes.addnote(argv.title,argv.body)
   
}
})
yargs.command({
    command:'remove',
    description:'removes an existing note',
    builder:
    {
        title:
        {
            description:'title of the note which you want to delete',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv)
    {
         notes.removenote(argv.title)
         
    }
})
yargs.command({
    command:'showlist',
    description:'This shows List of all items',
    handler()
    {
        notes.showlist()
    }

})
yargs.command({
    command:'read',
    description:'This reads the note',
    builder:
    {
        title:
        {
            description:'add a title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.readnote(argv.title)
    }

})

yargs.parse()