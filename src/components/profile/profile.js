import "./profile.css"

function Profile() {
  return (
    <div class="container">
      <div class="row mt-5">
        <div  class="col-6">
            <h4>My Profile</h4>
            <div className="content-profile">
                <div className="content-img"></div>
            </div>
        </div>
        <div style = {{backgroundColor:'blue'}} class="col-6">
            <h4>History Transaction</h4>
            <div className="content-history"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile
