<article class="overview-profile">
	<div class="overview-profile-header">
		<h4>{{translate 'Profile'}}</h4>
	</div>
	<section class="overview-profile-card">
		<div class="overview-profile-card-content">
			{{#if isCompany}}
				<p class="overview-profile-company">{{companyName}}</p>
			{{/if}}
			<p class="overview-profile-name {{#if isNameTitle}}overview-profile-name-title{{/if}}">{{name}}</p>
			<p class="overview-profile-email">{{email}}</p>
			<p class="overview-profile-phone">{{phone}}</p>
		</div>
		<a class="overview-profile-card-button-edit" href="/profileinformation">{{translate 'Edit'}}</a>
	</section>
</article>




{{!----
Use the following context variables when customizing this template: 
	
	name (String)
	isCompany (Boolean)
	isNameTitle (Boolean)
	companyName (String)
	email (String)
	phone (String)

----}}
