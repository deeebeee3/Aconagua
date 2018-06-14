<div class="order-wizard-paymentmethod-threedsecure-module">

    {{#if threeDSecureError}}

    <div class="alert alert-error">

        {{ threeDSecureError.errorMessage }}

    </div>

    {{else}}

        {{{iframe}}}

    {{/if}}

</div>