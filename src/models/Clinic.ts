import mongoose from 'mongoose';
import uuid from 'uuid/v4';
const Schema = mongoose.Schema;
import Helpers from '../utils/Helpers';

const ClinicSchema = new Schema({
  //* Basic Information
  name: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true },
  domain: { type: String, unique: true },
	logo: { type: String },
	locations: [
		{
      address_id: {type: String, default: 'add_pid_' + uuid() },
			address: { type: String, required: true },
			address2: { type: String },
			state: { type: String, required: true },
			city: { type: String, required: true },
			country: { type: String, required: true }
		}
	],
  //* Contact Information
  phones: [
		{
			phone_id: { type: String, default: 'cpid_' + uuid() },
			phone: { type: String, required: true }
		}
	],
	emails: [
		{
			email_id: { type: String, default: 'ceid_' + uuid() },
			email: { type: String }
		}
	],
	social: {
		youtube: { type: String },
		twitter: { type: String },
		facebook: { type: String },
		linkedin: { type: String },
		instagram: { type: String },
    whatsapp: { type: String },
    website: { type: String },
	},
  //* Primary Admin information
	admin_email: { type: String, required: true, unique: true },
	is_admin_email_verified: { type: Boolean, default: false },
  admin_password: { type: String, required: true },
  contact_phone: { type: String, required: true },
  security_question: { type: String },
  security_answer: { type: String },
  security_question2: { type: String },
  security_answer2: { type: String },
  //* Account Information
	is_domain_verified: { type: Boolean, default: false },
	is_in_trial: { type: Boolean, default: false },
	is_trial_elegible: { type: Boolean, default: true },
  creation_date: { type: Date, default: Helpers.getUTCTime() }, 
  //* Reporting information
  reports: [
    {
      event_name: { type: String, required: true }, 
      user: { type: String, required: true },
      user_id: { type: Schema.Types.ObjectId, ref: 'user', required: true }, 
      date: { type: Date, default: Helpers.getUTCTime() } 
    }
  ], 
  total_doctors: { type: Number, required: true }, 
  total_nourses: { type: Number, required: true }
});

const Clinic = mongoose.model('clinic', ClinicSchema);

export default Clinic;