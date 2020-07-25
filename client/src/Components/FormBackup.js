import React from 'react'

const FormBackup = () => {
    return (

        <section className="container" id="formBackupForm">

            <form>

                <div className="form-group">
                    <p className="lead registerTitle">Upload New Inventory Item</p>

                </div>
                <div className="form-row">
                    <div className="col-md-6">
                        <label >Category</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Closet</option>
                            <option>Collectables</option>
                            <option>Paperwork</option>
                            <option>Donation</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <div className="col-md-6 ">
                            <label className="form-row">Name</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" />
                    <label class="custom-file-label" for="customFile">Choose file</label>
                </div>

                <div className="form-group">

                    <div className="form-row">
                        <div className="form-row col-md-6">

                            <label>Description</label>
                            <textArea className="form-control" col="6" rows="4" />

                        </div>



                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label"> Important   </label>
                                <button type="submit" className="btn btn-primary" >Create</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>


        </section >

    )
}

export default FormBackup
