import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LoaderOutline.svg';

export function LoaderOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LoaderOutline">
      <SVG />
    </Icon>
  );
}
