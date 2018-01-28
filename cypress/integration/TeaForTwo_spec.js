describe('TeaForTwo', function() {
  context('Requests to valid URLs', function() {
    it('return a 200 status code', function() {
      cy.request({
        url: 'http://localhost:8000/jobs',
        failOnStatusCode:false
      })
      .then(function(resp) {
        expect(resp.status).to.eq(200)
      })
    })
  })
})
