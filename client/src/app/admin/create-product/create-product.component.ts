import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubCategory, Product, CasaOption, PandusOption, IndicatorOption} from '../shared/interfaces';
import {AlertService} from '../shared/services/alert.service';
import {ProductService} from '../../shared/product.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {of} from 'rxjs';
import {SubcategoryService} from '../../shared/subcategory.service';
import {CasaService} from '../../shared/casa.service';
import {OrderService} from '../../shared/order.service';
import {PandusService} from '../../shared/pandus.service';
import {IndicatorService} from '../../shared/indicator.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  public Editor = ClassicEditor;

  products: Product;
  form: FormGroup;
  @ViewChild('input') inputRef: ElementRef;
  @ViewChild('inputOne') inputOneRef: ElementRef;
  @ViewChild('inputTwo') inputTwoRef: ElementRef;
  @ViewChild('inputThree') inputThreeRef: ElementRef;
  @ViewChild('inputFour') inputFourRef: ElementRef;
  image: File;
  imageOne: File;
  imageTwo: File;
  imageThree: File;
  imageFour: File;
  whyCategory;
  imagePreview: string | ArrayBuffer = '';
  imageOnePreview: string | ArrayBuffer = '';
  imageTwoPreview: string | ArrayBuffer = '';
  imageThreePreview: string | ArrayBuffer = '';
  imageFourPreview: string | ArrayBuffer = '';
  isNew = true;
  categories: SubCategory[] = [];
  lcasa: CasaOption[] = [];
  lpandus: PandusOption[] = [];
  lindicator: IndicatorOption[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: SubcategoryService,
    private casaService: CasaService,
    private pandusService: PandusService,
    private indicatorService: IndicatorService,
    private alert: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    public order: OrderService,
  ) {

  }

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe(categories => {
      this.categories = categories;
    });

    this.casaService.getAll().subscribe(casa => {
      this.lcasa = casa;
    });

    this.pandusService.getAll().subscribe(pandus => {
      this.lpandus = pandus;
    });

    this.indicatorService.getAll().subscribe(indicator => {
      this.lindicator = indicator;
    });

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      subcategory: new FormControl(null, Validators.required),
      cost: new FormControl(null, [Validators.required, Validators.min(1)]),
      oldCost: new FormControl(null),
      content: new FormControl(null),
      spec: new FormControl(),
      casa: new FormControl(),
      pandus: new FormControl(),
      indicator: new FormControl(),
      option: new FormControl(false),


    });

    this.form.disable();

    this.route.params.pipe(
      switchMap((params: Params) => {
        if (params.id) {
          this.isNew = false;
          return this.productService.getByIdProduct(params.id);
        }
        return of(null);
      })
    )
      .subscribe(
        (products: Product) => {
          if (products) {
            this.products = products;
            this.form.patchValue({
              name: products.name,
              subcategory: products.subcategory,
              cost: products.cost,
              oldCost: products.oldCost,
              content: products.content,
              spec: products.spec,
              casa: products.casa,
              pandus: products.pandus,
              indicator: products.indicator,
              option: products.option,
              image: products.img,
              imageOne: products.imgOne,
              imageTwo: products.imgTwo,
              imageThree: products.imgThree,
              imageFour: products.imgFour,
            });

            this.imagePreview = products.img[0].path;
            this.imageOnePreview = products.imgOne[0].path;
            this.imageTwoPreview = products.imgTwo[0].path;
            this.imageThreePreview = products.imgThree[0].path;
            this.imageFourPreview = products.imgFour[0].path;
          }
          console.log(this.imageOnePreview);
          this.form.enable();
        },
        error => this.alert.warning(error.error.message)
      );

  }


  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  onFileOneUpload(event: any) {
    const file = event.target.files[0];
    this.imageOne = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageOnePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }


  onFileTwoUpload(event: any) {
    const file = event.target.files[0];
    this.imageTwo = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageTwoPreview = reader.result;
    };

    reader.readAsDataURL(file);
  }


  onFileThreeUpload(event: any) {
    const file = event.target.files[0];
    this.imageThree = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageThreePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }


  onFileFourUpload(event: any) {
    const file = event.target.files[0];
    this.imageFour = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageFourPreview = reader.result;
    };

    reader.readAsDataURL(file);
  }


  triggerClick() {
    this.inputRef.nativeElement.click();

  }

  triggerOneClick() {
    this.inputOneRef.nativeElement.click();

  }

  triggerTwoClick() {
    this.inputTwoRef.nativeElement.click();

  }

  triggerThreeClick() {
    this.inputThreeRef.nativeElement.click();

  }

  triggerFourClick() {
    this.inputFourRef.nativeElement.click();

  }


  onSubmit() {
    let obs$;
    console.log('lol' , this.form.value.casa);

    obs$ = this.productService

      .create(
        this.form.value.name,
        this.form.value.subcategory,
        this.form.value.cost,
        this.form.value.oldCost,
        this.form.value.content,
        this.form.value.spec,
        this.form.value.casa,
        this.form.value.pandus,
        this.form.value.indicator,
        this.form.value.option,
        this.image,
        this.imageOne,
        this.imageTwo,
        this.imageThree,
        this.imageFour,

      );

    this.form.disable();
    if (this.isNew) {
      console.log(this.form.value.casa);
    } else {
      obs$ = this.productService
        .update(
          this.products._id,
          this.form.value.name,
          this.form.value.subcategory,
          this.form.value.cost,
          this.form.value.oldCost,
          this.form.value.content,
          this.form.value.spec,
          this.form.value.casa,
          this.form.value.pandus,
          this.form.value.indicator,
          this.form.value.option,
          this.image,
          this.imageOne,
          this.imageTwo,
          this.imageThree,
          this.imageFour,
        );

    }
    obs$.subscribe(
      product => {
        this.products = product;
        this.alert.success('Изминения сохранены.');

        this.form.enable();
      },
      error => {
        this.alert.danger(error.error.message);
        this.form.enable();
      },
      () => this.router.navigate(['/admin/product'])
    );
  }

  setOptions(casa: CasaOption): void {
    console.log(casa);

  }
}

