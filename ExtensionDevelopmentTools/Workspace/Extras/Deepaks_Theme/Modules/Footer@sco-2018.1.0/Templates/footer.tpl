<div data-view="Global.BackToTop"></div>
<div class="footer-content">

	<div id="banner-footer" class="content-banner banner-footer" data-cms-area="global_banner_footer" data-cms-area-filters="global"></div>

	<div class="footer-content-nav">
		{{#if showFooterNavigationLinks}}
			<ul class="footer-content-nav-list">
				{{#each footerNavigationLinks}}
					<li>
						<a {{objectToAtrributes item}}>
							{{text}}
						</a>
					</li>
				{{/each}}
			</ul>
		{{/if}}
	</div>

	<div class="footer-content-right">
		<div data-view="FooterContent"></div>

		<div class="footer-content-copyright">
			{{translate '&copy; 2008-2015 Company Name'}}
		</div>
	</div>
</div>



{{!----
Use the following context variables when customizing this template:

	showFooterNavigationLinks (Boolean)
	footerNavigationLinks (Array)

----}}
