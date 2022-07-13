const Email = () => {
	return(
	  <>
	  {EmailText.map((inbox, i) => (
	  <div className="modal fade" id={"exampleModalCenter" + i} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" key={i}>
	  <div className="modal-dialog modal-dialog-centered" role="document">
		<div className="modal-content">
		  <div className="modal-header">
			<h6 className="modal-title" id="exampleModalLongTitle">{inbox.mittente}</h6>
			<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			  <span aria-hidden="true">&times;</span>
			</button>
		  </div>
		  <div className="modal-header">
			<h5 className="modal-title" id="exampleModalLongTitle">{inbox.titolo}</h5>
		</div>
		  <div className="modal-body">
			<h5>{inbox.emailHead}</h5>
			<br/>
			{inbox.email}
			<br/>
			<br/>
			<h6>{inbox.emailFooter}</h6>
		  </div>
		  <div className="modal-footer">
			<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		  </div>
		</div>
	  </div>
	</div>
	))}
	</>
	)
  }