const coman = require("express");
const run = coman();
const path = require("path");


//configuración
run.set("puerto", 80);
run.set("views",path.join(__dirname,"views"));
run.engine("html",require("ejs").renderFile);
run.set("view engine", "ejs");

//rutas
run.get("/index.html.", (req,res)=>{
    res.render("index.html");
});
run.get("/acceso.html", (req,res)=>{
    res.render("acceso.html");
});
run.get("/registro.html", (req,res)=>{
    res.render("registro.html");
});
run.get("/webmed.html", (req,res)=>{
    res.render("webmed.html");
});
run.get("/recu", (req,res)=>{
    res.render("recursos.html");
});
run.get("/verificador", (req,res)=>{
    res.render("verificador.html");
});
run.get("/calculadora", (req,res)=>{
    res.render("calculadora.html");
});
run.get("/medicos", (req,res)=>{
    res.render("medicos.html");
});
run.get("/seguros", (req,res)=>{
    res.render("seguros.html");
});
run.get("/ambulancia.html", (req,res)=>{
    res.render("ambulancia.html");
});
run.get("/salu", (req,res)=>{
    res.render("salud.html");
});
run.get("/medi", (req,res)=>{
    res.render("medicamentos.html");
});
run.get("/pago", (req,res)=>{
    res.render("pago.html");
});
run.get("/fina", (req,res)=>{
    res.render("finanzas.html");
});
run.get("/noti", (req,res)=>{
    res.render("noticias.html");
});
run.get("/come", (req,res)=>{
    res.render("comentarios.html");
});

//archivos Estaticos
run.use(coman.static(path.join(__dirname,"public")));

run.listen(process.env. PORT || run.get("puerto"), ()=>{
    console.log(" Servidor Web Trabajando en el Puerto", 80);
});