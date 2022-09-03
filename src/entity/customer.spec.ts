import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    // Test ID

    it("should throw error when id is empty", () => {
        expect(() => {
            const customer = new Customer("", "Dudu");
        }).toThrowError("Id is required");
    });

    // Test NAME

    it("should throw error when name is empty", () => {
        expect(() => {
            const customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    // Test CHANGE NAME

    it("should change name", () => {

        // Arrange
        const customer = new Customer("123", "Dudu");

        // Act
        customer.changeName("Tigre");

        // Assert
        expect(customer.name).toBe("Tigre");
    });

    // Test ADDRESS and ACTIVATE

    it("should activate customer", () => {

        const customer = new Customer("1", "Customer 1")
        const address = new Address("Rua 1", 123, "12345-000", "Duducity", "RS");
        customer.Address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    // Test LOG ERROR to ACTIVATE

    it("should throw error when address is undefined when you activate a customer", () => {

        expect(() => {
            const customer = new Customer("1", "Customer 1")

            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });

    // Test DEACTIVATE

    it("should deactivate customer", () => {

        const customer = new Customer("1", "Customer 1")

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });
});