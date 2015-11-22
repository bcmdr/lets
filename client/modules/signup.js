let signup = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      emailAddress: {
        required: 'Please enter your email address here.',
        email: 'Is this email address legit?'
      },
      password: {
        required: 'Please enter a password here.',
        minlength: 'Use at least six characters, please.'
      }
    },
    submitHandler() { _handleSignup( template ); }
  };
};

let _handleSignup = ( template ) => {
  let password = template.find( '[name="password"]' ).value;

  let user = {
    email: template.find( '[name="emailAddress"]' ).value,
    password: Accounts._hashPassword( password )
  };

  Meteor.createUser( user, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      Meteor.loginWithPassword( user.email, password );
    }
  });
};

Modules.client.signup = signup;
