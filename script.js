const fileInput = document.getElementById("file-input")
const audioElemnt = document.getElementById('audio')


fileInput.addEventListener("change", (e)=>{
    
    const file = e.target.files[0]
    if(file){
        const objetURL = URL.createObjectURL(file)
        audioElemnt.src=objetURL
    }
})