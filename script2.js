

// 1. Create a predefined objects in an array (10 objects) and display it on HTML

let products =[

    {

        pname:"P30",

        price:"45,000",

        pcode:"#000123",

        description:"lami kaayo",

        manufacturer:"",

        stocks:"5",

        supplier:"Ako",

        expdate:"january 20, 2019",

        url:"https://consumer.huawei.com/ph/phones/p30/",

        imgurl:"img/1P30.png"

    },

    {

        pname:"P30 PRO",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/p30-pro/",

        imgurl:"img/2P30Pro.png"

    },

    {

        pname:"P30 LITE",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/p30-lite/",

        imgurl:"img/3p30lite.png"

    },


    {

        pname:"MATE 20",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/mate20/",

        imgurl:"img/4Mate20.png"

    },

    {

        pname:"MATE 20 PORCHE",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/porsche-design-mate20-rs/",

        imgurl:"img/5mate20porche.png"
    },

    {

        pname:"P20",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/p20/",

        imgurl:"img/6p20.png"

    },

    {

        pname:"P20 PRO",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/p20-pro/",

        imgurl:"img/7p20pro.png"

    },

    {

        pname:"P20 LITE",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/p20-lite/",

        imgurl:"img/8p20lite.png"

    },

    {

        pname:"Y6 PRO 2019",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/y6-pro-2019/",

        imgurl:"img/9y6pro2019.png"

    },

    {

        pname:"NOVA 3",

        price:"",

        pcode:"",

        description:"",

        manufacturer:"",

        stocks:"",

        supplier:"",

        expdate:"",

        url:"https://consumer.huawei.com/ph/phones/nova3/",
        
        imgurl:"img/10red.png"

    }

]

let output = "";

products.forEach(function(item){

    if (item.imgurl == undefined)

    {

        item.imgurl = "https://via.placeholder.com/300"

    }

    output +=
     `
            <div class ='item'>
                <img src= '${item.imgurl}'>
                <p>${item.pname}</p>

                <p>Price: ${item.price} </p>
                <p>Price Code: ${item.pcode}</p>
                <p>Description: ${item.description}</p>
                <p>Manufacturer: ${item.manufacturer}</p>
                <p>Stocks: ${item.stocks}</p>
                <p>Supplier: ${item.supplier}<p/>
                <p>Date Lunch: ${item.expdate}</p>
                <a href='${item.url}'><button>View</button></a>

            </div>
    
    
    `
    
    


})

document.getElementById('container').innerHTML = output

