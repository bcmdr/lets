let submitInvite = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      title: {
        required: true,
      },
      description: {
        required: false
      },
      url: {
        required: false,
        url: true
      }
    },
    messages: {
      title: {
        required: 'Please enter a title for your invite.'
      },
      url: {
        url: 'Is this a valid link? (http://...)'
      }
    },
    submitHandler() { _handleSubmitInvite( template ); }
  };
};

let _handleSubmitInvite = ( template ) => {
  let invite = {
    title: template.find( '[name="title"]' ).value,
    description: template.find( '[name="description"]' ).value,
    url: template.find( '[name="url"]' ).value
  };

  Meteor.call( 'createInvite', invite, Meteor.userId(), ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      Bert.alert( 'Invite Submitted!', 'success' );
      FlowRouter.go( 'index' );
    }
  });
};

Modules.client.submitInvite = submitInvite;
