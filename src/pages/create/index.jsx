import { formatRevalidate } from "next/dist/server/lib/revalidate";

export default function Create () {
    return (
        <div className="contenedorcreate text-center mb-12">
            <div className="row">
                <div className="col-6">
                    <label className='form-label'>Description</label>
                    <input type="text"  className="form-control" placeholder="Description Product"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className='form-label'>Price</label>
                    <input type="text"  className="form-control" placeholder="Price Product"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className='form-label'>Category</label>
                    <input type="text"  className="form-control" placeholder="Category Product"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <button type="submit" className="btn btn-success">
                        Create Upsell Link
                    </button>
                </div>
            </div>
            </div>
    )
}