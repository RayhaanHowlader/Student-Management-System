function WalletUser(){
    const email=localStorage.getItem("LoggedInUser");
    const fetchUserProfile = async () => {
        if (email) {
            try {
                const response = await fetch(`http://localhost:3000/wallet/${email}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data.money);
                } else {
                    console.error("Failed to fetch digital wallet:", response.status);
                }
            } catch (error) {
                console.error("Error fetching  digital wallet:", error);

            }
        }
    };
    fetchUserProfile();
}
export default WalletUser