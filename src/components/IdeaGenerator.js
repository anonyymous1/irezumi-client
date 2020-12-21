import React from "react";
const IdeaGenerator = () => {
    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-7 offset-md-3">
                    <div className="card card-body">
                        <h1>Idea Generator</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="randomIdea">Random Idea</label>
                                <input type="text" name="randomIdea" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <h2>Results</h2>
        </div>
    )
}
export default IdeaGenerator;