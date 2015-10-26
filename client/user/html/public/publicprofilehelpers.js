if(Meteor.isClient) {

    Template.account_doctor_affilliations_public.helpers({
        affilliations: function () {
            var id = sessionStorage.getItem('viewUserId');
            return Affilliations.find({doctor_id:id});
        }

    })



    Template.account_doctor_procedures_public.helpers({
        procedures: function () {
            var id = sessionStorage.getItem('viewUserId');
            return Procedures.find({doctor_id:id});
        }

    })



    Template.account_doctor_specializations_public.helpers({
        specializations: function () {
            var id = sessionStorage.getItem('viewUserId');
            return Specializations.find({doctor_id:id});
        }

    })



    Template.account_doctor_subspecializations_public.helpers({
        subspecializations: function () {
            var id = sessionStorage.getItem('viewUserId');
            return SubSpecializations.find({doctor_id:id});
        }

    })




    Template.account_doctor_education_public.helpers({
        educations: function () {
            var id = sessionStorage.getItem('viewUserId');
            return Education.find({doctor_id:id});
        }

    })


    Template.account_doctor_trainings_public.helpers({
        trainings: function () {
            var id = sessionStorage.getItem('viewUserId');
            return Trainings.find({doctor_id:id});
        }

    })



    Template.patientMedicalRecordList_public.helpers({
        record: function(){
            var id = sessionStorage.getItem('viewUserId');
            return PatientMedicalRecords.find({patient_id:id});
        }
    });



    Template.account_patient_medical_conditions_list_public.helpers({
        record: function(){
            var id = sessionStorage.getItem('viewUserId');
            return Patientmedicalconditions.find({patient_id:id});
        }
    });


    Template.account_patient_allergy_list_public.helpers({
        record: function(){
            var id = sessionStorage.getItem('viewUserId');
            return Patientallergies.find({patient_id:id});
        }
    });






}













