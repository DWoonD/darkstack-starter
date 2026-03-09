describe('health api', () => {
  it('should respond with ok true', () => {
    cy.request<{ ok: boolean }>('/api/health').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.ok).to.eq(true)
    })
  })
})
