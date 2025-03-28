

export class Record{
    id;
    type;
    owner;
    total_revenue;
    taxes_paid;
    taxes_owed;
    status;

    constructor(id, type, owner, total_revenue, taxes_paid, taxes_owed, status)
    {
        this.id = id;
        this.type = type;
        this.owner = owner;
        this.total_revenue = total_revenue;
        this.taxes_paid = taxes_paid;
        this.taxes_owed = taxes_owed;
        this.status = status;
    }
}