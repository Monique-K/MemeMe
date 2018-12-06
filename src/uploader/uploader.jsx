import React from "react";
import "./uploader.scss";
import { Receiver } from 'react-file-uploader';
import ReactDOM from 'react-dom'


// const files = [];
// const url = "process.php";
// const formData = new FormData();

export class Uploader extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUploaded: false,
      loading: false,
      imageURL: "",
      isReceiverOpen: true,
      uploads: ""
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("________e", e.target)
  //   files.push(e.target);
  //   console.log("files", files);

  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   }).then(response => {
  //     console.log("response!", response);
  //   });
  // }

  handleDragEnter(e) {
    // this.setState({ isReceiverOpen: true });
    console.log("open it", e)
  }

  handleDragLeave(e) {
    // this.setState({ isReceiverOpen: false });
    console.log("close it", e)
  }

  handleFileDrop(e, uploads) {
    // check if the files are drop on the targeted DOM
    const node = ReactDOM.findDOMNode(this.refs.uploadPanel);
    console.log("e in filedrop", e)
    console.log("uploads", uploads)
    this.setState({
      uploads: this.state.uploads.concat(uploads)
      })
        return;
  }
  

  render() {
    return (
      <div className="uploader-container">
      <Receiver
        customClass={""}
        isOpen={this.state.isReceiverOpen}
        onDragEnter={() => this.handleDragEnter()}
        onDragOver={() => console.log("drag over")}
        onDragLeave={() => this.handleDragLeave()}
        onFileDrop={() => this.handleFileDrop()}
      >
        <div>
          <h3> Upload an image and click the button to meme-ify it!</h3>
        <br />
        {/* <form
          method="post"
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}
        >
          <input
            type="file"
            name="files[]"
            multiple
            className="uploader-button"
            accept="image/png, image/jpeg"
            files
          />
          <input
            type="submit"
            value="Upload File"
            name="submit"
            className="uploader-button"
          />
        </form> */}
        <br />
        <button className="uploader-button mememe-button">MEME ME!</button>
        </div>
      </Receiver>
        

      </div>
    );
  }
}
// react drop zone
// convert to basic c4 and convert the image tag to that
