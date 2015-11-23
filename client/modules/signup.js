let signup = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      username: {
        required: true,
      },
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
      username: {
        required: 'Please choose a username.'
      },
      emailAddress: {
        required: 'Please enter your email address.',
        email: 'Is this email address valid?'
      },
      password: {
        required: 'Please enter a password.',
        minlength: 'Use at least six characters, please.'
      }
    },
    submitHandler() { _handleSignup( template ); }
  };
};

let _handleSignup = ( template ) => {
  let password = template.find( '[name="password"]' ).value;

  let user = {
    username: template.find( '[name="username"]' ).value,
    email: template.find( '[name="emailAddress"]' ).value,
    password: Accounts._hashPassword( password )
  };

  Meteor.call( 'addUser', user, function( error, response ) {
    if ( error ) {
      Bert.alert( error.reason, 'warning' );
    } else {
      Meteor.loginWithPassword( user.email, password );
    }
  });
};

Modules.client.signup = signup;
