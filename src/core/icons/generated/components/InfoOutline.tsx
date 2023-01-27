import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InfoOutline.svg';

export function InfoOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="InfoOutline">
      <SVG />
    </Icon>
  );
}
