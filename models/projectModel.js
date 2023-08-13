const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema(
	{
		projectNumber: { type: 'Number' },
		projectDate: { type: 'Date' },
		projectType: { type: 'String' },
		projectStatus: { type: 'String' },
		projectNotes: { type: 'String' },
		client: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Client',
		},
		projectItems: [
			{
				itemNumber: { type: 'Number' },
				itemDescription: { type: 'String' },
				itemPrice: { type: 'Number' },
			},
		],
	},
	{
		timestamps: true,
	}
);

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
