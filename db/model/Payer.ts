import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class Payer extends Model {
  static table = 'payers'

  @field('first_name') firstName
  @field('last_name') lastName
  @field('company_name') companyName
  @field('tin') tin
  @field('phone') phone
  @field('email') email
  @field('vendor') vendor
  @field('property_owner') propertyOwner
  @field('business_type') businessType
  @field('last_payment_date') lastPaymentDate
  @field('notes') notes
  @field('created_by') createdBy
  @field('last_modified_by') lastModifiedBy
  @date('created_datetime') created_at
  @date('last_modified_date') updated_at
  @field('location') location

  get toObject() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      name: `${this.firstName} ${this.lastName}`,
      companyName: this.companyName,
      tin: this.tin,
      phone: this.phone,
      email: this.email,
      vendor: this.vendor,
      propertyOwner: this.propertyOwner,
      businessType: this.businessType,
      lastPaymentDate: this.lastPaymentDate,
      notes: this.notes,
      createdBy: this.createdBy,
      lastModifiedBy: this.lastModifiedBy,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }
}
