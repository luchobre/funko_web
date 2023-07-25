module.exports = {
  homeView: (req, res) => {
    res.render('index', {
        titulo: "Home | Funkoshop"
    })
  },

  // TODO Crear el FRONT
  contactView:(req, res) => res.send('Contact View Route'),
  aboutView:(req, res) => res.send('About View Route'),
  faqsView:(req, res) => res.send('FAQs View Route'),
};