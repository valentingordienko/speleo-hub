import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilePDFOutline.svg';

export function FilePDFOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FilePDFOutline">
      <SVG />
    </Icon>
  );
}
