function Refill(){

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/refillwallet',{email,money}).then(result=>{
        console.log(result); 
        })
        .catch(err=>console.log(err))
    }
const [email,setEmail]=useState();
const [money,setMoney]=useState();


    return(<>
    <form method="post" onSubmit={handleSubmit}>
    <input type="text" name="" id="1" placeholder="Enter email address"  onChange={(e)=>setEmail(e.target.value)}/>
    <input type="number" name="" id="2" placeholder="Enter the amount" onChange={(e)=>setMoney(e.target.value)} />
    <button type="submit">Submit</button> 
</form>  
    </>);
}
export default Refill;