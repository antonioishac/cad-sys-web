import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';

import {MaterialModule} from './material.module';

import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ButtonModule, CardModule, MultiSelectModule, TabViewModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {GrowlModule} from 'primeng/growl';
import {MessagesModule} from 'primeng/messages';
import {MessageService} from 'primeng/components/common/messageservice';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ChartModule} from 'primeng/chart';
import {TreeTableModule} from 'primeng/treetable';
import { PanelModule } from 'primeng/panel';

import {MainComponent} from './layouts/main/main.component';
import {CabecalhoComponent} from './layouts/cabecalho/cabecalho.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {GoTopButtonComponent} from './layouts/go-top-button/go-top-button.component';
import {RodapeComponent} from './layouts/rodape/rodape.component';
import {FarolFlutuanteComponent} from './layouts/farol-flutuante/farol-flutuante.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';

import { CookieService } from 'ngx-cookie-service';

import {
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faArchive,
    faBars,
    faBell,
    faBook,
    faBriefcaseMedical,
    faCheck,
    faClipboardList,
    faCog,
    faCogs,
    faComments,
    faEdit,
    faExclamation,
    faExclamationTriangle,
    faExternalLinkAlt,
    faHandHoldingHeart,
    faHeadset,
    faHospital,
    faInfoCircle,
    faSearch,
    faTimes,
    faUserCog,
    faUserMd,
    faWrench,
    faHome,
    faList,
    faQuestion,
    faObjectGroup,
    faBullhorn,
    faChartPie,
    faDiagnoses,
    faEnvelope,
    faCodeBranch,
    faChartLine,
    faListOl,
    faUserClock
} from '@fortawesome/free-solid-svg-icons';

import {MensageriaService} from './shared/mensageria/mensageria.service';
import {GrowlComponent} from './shared/growl/growl.component';

import {OverlayModule} from '@angular/cdk/overlay';

import {HomeSegurancaComponent} from './home-seguranca/home-seguranca.component';

import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonModule, DatePipe} from '@angular/common';

import {MAT_DATE_LOCALE} from '@angular/material';
import {KeyFilterModule} from 'primeng/keyfilter';
import {BlocoLateralComponent} from './shared/bloco-lateral/bloco-lateral.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioPhoneComponent } from './usuario/usuario-phone/usuario-phone.component';
import { MessageComponent } from './shared/message/message.component';
import { UsuarioPesquisaComponent } from './usuario/usuario-pesquisa/usuario-pesquisa.component';

library.add(faBars,
    faAngleDown,
    faAngleRight,
    faCog,
    faWrench,
    faTimes,
    faCogs,
    faUserCog,
    faInfoCircle,
    faHeadset,
    faExclamation,
    faExclamationTriangle,
    faCheck,
    faBook,
    faArchive,
    faAngleLeft,
    faEdit,
    faHospital,
    faUserMd,
    faBriefcaseMedical,
    faSearch,
    faBell,
    faClipboardList,
    faComments,
    faExternalLinkAlt,
    faHandHoldingHeart,
    faHome,
    faList,
    faQuestion,
    faObjectGroup,
    faBullhorn,
    faChartPie,
    faDiagnoses,
    faEnvelope,
    faCodeBranch,
    faChartLine,
    faListOl,
    faUserClock);

@NgModule({
    declarations: [
        MainComponent,
        CabecalhoComponent,
        SidebarComponent,
        RodapeComponent,
        GoTopButtonComponent,
        FarolFlutuanteComponent,
        GrowlComponent,
        
        LoginFormComponent,
        
        HomeSegurancaComponent,
        
        BlocoLateralComponent,
        
        UsuarioComponent,
        
        UsuarioPhoneComponent,

        MessageComponent,

        UsuarioPesquisaComponent
        
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        SidebarModule,
        SlideMenuModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        MultiSelectModule,
        FileUploadModule,
        GrowlModule,
        MessagesModule,
        DialogModule,
        ConfirmDialogModule,
        OverlayModule,
        ChartModule,
        TreeTableModule,
        HttpClientModule,
        KeyFilterModule,
        TabViewModule,
        CardModule,
        PanelModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        MensageriaService,
        MessageService,
        ConfirmationService,
        TranslateService,
        DatePipe,
        CookieService,
        {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
    ],
    bootstrap: [MainComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}
