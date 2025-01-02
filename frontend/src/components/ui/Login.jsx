import { Label } from "./components/ui/label"
function Login(){
    return(<div className="flex justify-center flex-col items-center ">
        <h1 className="text-2xl">Student Login</h1>
        <Label htmlFor="email">Your email address</Label>

    </div>);
}
export default Login