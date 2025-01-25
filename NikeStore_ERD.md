erDiagram
    CUSTOMER ||--|{ PRODUCT : order
    CUSTOMER {
        int orderNumber PK
        string name
        string address
    }
    PRODUCT |{--o{ SALE : has
    PRODUCT {
        int productNumber PK
        string productType 
        string color
        int size
    }
    SALE o{ -- |{ INVENTORY : has
    SALE {
       int price
    }

Below a brief description of the entities and relationships between them:
CUSTOMER: 
  orderNmaber(unique number for each order), name and address
  Each CUSTOMER order one or more PRODUCT that and each PRODUCT get ordered by a CUSTOMER.
PRODUCT:
  productNumber, productType, color and size
  Each product has zero or more sale and each sale has one or more product
Sale: 
  price
  Each SALE has one or more INVENTORY and eacj INVENTORY has zero or more SALE
  
  