const Email = () => {
	return(
	  <>
	  {EmailText.map((inbox, i) => (
	  <div className="modal fade" id={"exampleModalCenter" + i} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" key={i}>
	  <div className="modal-dialog modal-dialog-centered" style={{justifyContent: 'space-around'}} role="document">
		<div id="modalC" className="modal-content" style={{width: inbox.videoPath ? '100%':'70%'}}>
		  <div className="modal-header" style={{flexDirection: 'column'}} >
			<div style={{flexDirection: 'row', color: "#0078d4", display: 'flex', width: '100%'}}>
				<h6 className="modal-title" id="exampleModalLongTitle" >{inbox.mittente}</h6>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<h5 className="modal-title" id="exampleModalLongTitle">{inbox.titolo}</h5>
		  </div>


		  <div className="modal-body" style={{padding: inbox.videoPath ? '16vw' : '1rem'}}>
			  <h5>{inbox.emailHead}</h5>
			{inbox.videoPath ?
				<>
				<h6>After watching the video go back to the home</h6>
				<video id="video" className="video-responsive" onEnded={(e)=> AfterVideoFinal(e)} controls muted={""}>
					<source src={inbox.videoPath} type="video/mp4"></source>
				</video>
				</>
			:
			<>
				<br/>
				{inbox.email}
				<br/>
				<br/>
			</>
			}
			<h6>{inbox.emailFooter}</h6>
		  </div>
		  <div className="modal-footer">
			<button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#0078d4'}}>Close</button>
		  </div>
		</div>
	  </div>
	</div>
	))}
	</>
	)
  }