<div class="return-authorization-cancel-modal">
	<h4>{{translate 'Are you sure you want to cancel this return request?'}}</h4>
	<p>{{translate 'The status of the request will change to "Cancelled" but it won\'t be removed.'}}</p>
	<div class="return-authorization-cancel-modal-actions">
		<button class="return-authorization-cancel-modal-cancel-button" data-action="delete">
			{{translate 'Cancel Return'}}
		</button>
		<button class="return-authorization-cancel-modal-close-button" data-dismiss="modal" data-action="cancel">
			{{translate 'Close'}}
		</button>
	</div>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
