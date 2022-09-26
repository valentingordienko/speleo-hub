import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LoaderOutline.svg';

export function LoaderOutline(props: TProps) {
  return (
    <Icon {...props} name="LoaderOutline">
      <SVG />
    </Icon>
  );
}
