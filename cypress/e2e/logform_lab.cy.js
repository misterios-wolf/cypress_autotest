describe('Lab_Rostelecom', ()=> {

    it ('By', ()=> {
        cy.visit("https://test-ict.tech/")
        cy.viewport(1920, 1080)
        cy.contains('Контакты').click()
        cy.get('input[type="text"]').type('Kirill')
        cy.get('input[type="email"]').type('avtotest@lab.rost.ru')
        cy.contains('Курсы').click()
        cy.get('textarea[class="elementor-field-textual elementor-field  elementor-size-sm"]').type('Какие курсы есть на дату 10.07.2023?')
        cy.contains('Отправить').click()
    }
)})