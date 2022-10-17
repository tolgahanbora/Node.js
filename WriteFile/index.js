import fs from "fs"

fs.mkdir('etc/Employees', { recursive: true }, (err) => {
    if(err) console.log(err)
    console.log("Klasör Başarı ile oluşturuldu.")
})

fs.writeFile('employees.json','{"name":"Employee" ,"salary":2000}' ,(err) => {
    if(err) console.log(err)
    console.log("Başarı ile json dosyası oluşturuldu. ")
})

/*fs.appendFile('employees.json', '{"name":"Employee" ,"salary":2000}', (err) => {
    if(err) console.log(err)
    console.log("Başarı ile şifreler yazıldı.")
})*/

fs.readFile("employees.json", 'utf8', (err) => {
    if(err) console.log(err)
    console.log("Dosya başarı ile okundu.")
})

fs.rmdir('etc',{ recursive: true }, (err) => {
    if(err) console.log(err)
    console.log("Dosya başarı ile silindi.")
}) 