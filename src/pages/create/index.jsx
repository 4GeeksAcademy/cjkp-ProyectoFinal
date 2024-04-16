export default function Create () {
    return (
        <form className="contenedorcreate text-center mb-12">

        



            <div className="row">
                <div className="col-6">
                    <h2>Description</h2>
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2>Price</h2>
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2>Category</h2>
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <button type="button" >
                        Create Upsell Link
                    </button>
                </div>
            </div>
            </form>
        
        
    )
}