import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileXMLOutline.svg';

export function FileXMLOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FileXMLOutline">
      <SVG />
    </Icon>
  );
}
