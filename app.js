const http=require("http")
http.createServer((req,res)=>{
	res.write("Ratan tata and gandhi")
	res.end()
}).listen(2000)