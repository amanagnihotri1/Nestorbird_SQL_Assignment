const express=require("express");
const cors=require('cors');
const app=express();
const pg=require("pg");
const PORT=5000;
let data=[];
app.use(express.json());
app.use(cors());
const { Client } = pg;
const clientConfig = new Client({
  host: '',
  port: ,
  database: '',
  user: '',
  password: ''
});
clientConfig.connect();
app.get("/question",(req,res)=>
{
  res.json({id:0,question:'What is your age',options:[
    {id:0,value:'20+'},
    {id:1,value:'35+'},
    {
      id:2,
      value:'45+'
    }
]
});
});
app.get('/question/:value1',(req,res)=>
{
    console.log(req.params.value1);
    data.push(req.params.value1);
    let paramsVal=req.params.value1;
    if(paramsVal=='20+' || paramsVal=='35+' || paramsVal=="45+")
    {
        res.json({id:0,question:'Select Your Gender',options:[
        {
           id:0,
           value:'Male' 
        },
        {
            id:1,
            value:'Female',
        },
        {
            id:2,
            value:"lgbtqia",
        }    
        ]})
    }
    if(paramsVal=='Male' || paramsVal=='Female' || paramsVal=="lgbtqia")
    {
       res.json({id:0,question:'What is your prefered type of car',options:[
         {
             id:0,
             value:'Hatchback',
         },
         {
             id:1,
             value:'Sedan',
         },
         {
             id:3,
             value:'SUV'
         }
       ]})   
    }
    if(paramsVal=='Hatchback')
    {
      res.json({id:0,question:'Choose model you prefer',options:[
        {
            id:0,
            value:'Maruti Swift',
        },
        {
            id:1,
            value:'Hyundai i20',
        },
        {
            id:2,
            value:'Renault KWID',
        },
      ]})
    }
    if(paramsVal=='Sedan')
    {
        res.json({id:0,question:'Choose model you prefer',options:[
            {
                id:0,
                value:'Hyundai Verna',
            },
            {
                id:1,
                value:'Honda City',
            },
            {
                id:2,
                value:'Volkswagen Virtus',
            },
          ]})
    }
    if(paramsVal=='SUV')
    {
        res.json({id:0,question:'Choose model you prefer',options:[
            {
                id:0,
                value:'Mahindra Thar',
            },
            {
                id:1,
                value:'Fortuner',
            },
            {
                id:2,
                value:'XUV 700',
            },
          ]})
    } 
    if(
        paramsVal=='Mahindra Thar' ||
        paramsVal=='XUV 700' ||
        paramsVal=='Fortuner' ||
        paramsVal=='Volkswagen Virtus' ||
        paramsVal=='Honda City' ||
        paramsVal=='Hyundai Verna' ||
        paramsVal=='Renault KWID' ||
        paramsVal=='Hyundai i20' ||
        paramsVal=='Maruti Swift'    
)
{
    data.push(paramsVal);
}
});
app.get("/submitdata",async(req,res)=>
{
  console.log(data);  
  const createTable = await clientConfig.query("CREATE TABLE IF NOT EXISTS usersurvey(userId SERIAL PRIMARY KEY, userage VARCHAR NOT NULL,usergender VARCHAR NOT NULL,usercartype VARCHAR NOT NULL,usercarmodel VARCHAR NOT NULL);");
  const addData=await clientConfig.query('INSERT INTO usersurvey(userage,usergender,usercartype,usercarmodel) VALUES($1,$2,$3,$4)',[data[0],data[1],data[2],data[3]]);
  data=[];
 console.log("success");
 res.json({message:'success'});
});
app.listen(PORT,async(err)=>
{
    
    if(err)console.log('server error :',err);
    console.log('server started at port:5000');
})
