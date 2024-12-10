describe('API Test basic-records', () => {

    before(() => cy.getTokenPlatform())

    context('entities', () => {
        require('../../basic-records/entities/accountOrigins.spec');
        require('../../basic-records/entities/accountStatus.spec');
        require('../../basic-records/entities/accountType.spec');
        require('../../basic-records/entities/activityBranches.spec');
        require('../../basic-records/entities/addressTypes.spec');
        require('../../basic-records/entities/appointmentCategories.spec');
        require('../../basic-records/entities/branch.spec');
        require('../../basic-records/entities/businessTypes.spec');
        require('../../basic-records/entities/carrier.spec');
        require('../../basic-records/entities/cities.spec');
        require('../../basic-records/entities/company.spec');
        require('../../basic-records/entities/companyBranch.spec');
        require('../../basic-records/entities/companyGroups.spec');
        require('../../basic-records/entities/companySize.spec');
        require('../../basic-records/entities/contactOrigin.spec');
        require('../../basic-records/entities/contactOrigin.spec');
        require('../../basic-records/entities/countries.spec');
        require('../../basic-records/entities/department.spec');
        require('../../basic-records/entities/deposit.spec');
        require('../../basic-records/entities/eventStatus.spec');
        require('../../basic-records/entities/eventTypes.spec');
        require('../../basic-records/entities/followType.spec');
        require('../../basic-records/entities/function.spec');
        require('../../basic-records/entities/inactivationReason.spec');
        require('../../basic-records/entities/interestAreas.spec');
        require('../../basic-records/entities/locations.spec');
        require('../../basic-records/entities/lossReasons.spec');
        require('../../basic-records/entities/measurementUnit.spec');
        require('../../basic-records/entities/occurrenceOrigin.spec');
        require('../../basic-records/entities/occurrenceStatus.spec');
        require('../../basic-records/entities/occurrenceSubtype.spec');
        require('../../basic-records/entities/opportunityOrigins.spec');
        require('../../basic-records/entities/opportunityType.spec');
        require('../../basic-records/entities/paymentTerms.spec');
        require('../../basic-records/entities/paymentType.spec');
        require('../../basic-records/entities/personType.spec');
        require('../../basic-records/entities/priceTable.spec');
        require('../../basic-records/entities/product.spec');
        require('../../basic-records/entities/productCategories.spec');
        require('../../basic-records/entities/ratings.spec');
        require('../../basic-records/entities/regions.spec');
        require('../../basic-records/entities/relationshipTypes.spec');
    });

    context('queries', () => {
        require('../../basic-records/queries/healthCheck.spec');
    });
});