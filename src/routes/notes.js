const router = require('express').Router();
const Note = require('../models/Note');

router.get('/notes', async (req, res) => {
    const notes = await Note.find().sort({date: 'desc'});
    res.render('notes/all-notes', {notes});
});

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

router.post('/notes/add', async (req, res) => {
	const { title, description} = req.body;
	const errors = [];
	if(!title){
		errors.push({text: 'Please write a title'});
	}
	if(!description){
		errors.push({text: 'Please write a description'});
	}
	if (errors.length > 0) {
		res.render('notes/new-note', {
			errors,
			title,
			description
		});
	}else{
		const newNote = new Note({title, description});
		await newNote.save();
		req.flash('success_msg', 'Note added successfully');
		res.redirect('/notes');	
	}
});

router.get('/notes/edit/:id', async (req, res) => {
	try{
		const note = await Note.findById(req.params.id);
		console.log(note);
		res.render('notes/edit-note', {note});
	}catch(e){
		console.log(e);
		res.redirect('errors/not-found');
	}
});

router.put('/notes/edit-note/:id', async(req, res) => {
	const {title, description} = req.body;
	await Note.findByIdAndUpdate(req.params.id, {title, description});
	req.flash('success_msg', 'Note edited successfully');
	res.redirect('/notes');
});

router.delete('/notes/delete/:id', async (req,res) => {
	await Note.findByIdAndDelete(req.params.id);
	req.flash('success_msg', 'Note deleted successfully');
	res.redirect('/notes');
});


module.exports = router;