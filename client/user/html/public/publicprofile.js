if(Meteor.isClient){
    Template.user_personal_info_public.helpers({

        details: function(){
            var id =  sessionStorage.getItem('viewUserId');
            return Appusers.findOne({_id:id});
        }

    })

    Template.user_personal_info_public.helpers({

        adminId: function(){
            var id =  sessionStorage.getItem('viewUserId');
            return id;
        }

    })

    Template.acceptdoctor.helpers({

        user: function(){
            var id =  sessionStorage.getItem('viewUserId');
            return Appusers.findOne({_id:id});
        }

    })

    Template.acceptdoctor.events({

        'click .hirebutton': function(event,template){

            var id = event.currentTarget.id;

            Appusers.update({_id:id},{
                $set:{
                    status: "physician",
                    datehired: new Date()
                }
            })
        }

    })

    Template.acceptdoctor.events({

        'click .firebutton': function(event,template){

            var id = event.currentTarget.id;

            Appusers.update({_id:id},{
                $set:{
                    status: "applicant"
                }
            })
        }

    })



    Template.userprofile_edit_public.helpers({

        sessionId: function(){
            var id =  sessionStorage.getItem('viewUserId');
            return id;
        }

    })

    Template.userprofile_edit_public.helpers({

        details: function(){
            var id =  sessionStorage.getItem('viewUserId');
            return Appusers.findOne({_id:id});
        }

    })

    Template.physicianprofile_edit_public.helpers({
        details: function(){
            var id =  sessionStorage.getItem('viewUserId');
            return Appusers.findOne({_id:id});
        }
    })

    Template.physicianprofile_edit_public.events({
        'click #applynow': function(event, template){
            var id = sessionStorage.getItem('viewUserId');

            Appusers.update({_id:id},{
                $set:{
                    status: "applicant"
                }
            })
        }
    })

    Template.physicianprofile_edit_public.events({
        'click #cancelapplication': function(event, template){
            var id = sessionStorage.getItem('viewUserId');

            Appusers.update({_id:id},{
                $set:{
                    status: "patient"
                }
            })
        }
    })


}